import React, { useState, useEffect } from "react";
import {
  FaGreaterThan,
  FaLessThan,
  FaPencilAlt,
  FaTrash,
  FaPlus,
  FaSave
} from "react-icons/fa";
import {
  startOfWeek as sWeek,
  format,
  addBusinessDays,
  parseISO,
  parse
} from "date-fns";
import { AgGridReact } from "ag-grid-react";
import $ from "jquery";
import _ from "lodash";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {
  getIngredients,
  getMenu,
  addMenu,
  deleteMenu,
  updateMenu
} from "../../utils/api";
import Toast from "../../../components/Toast/toast";

const columnDefs = [
  { headerName: "Dia", field: "day" },
  { headerName: "Salada", field: "salad" },
  { headerName: "Principal", field: "mainCourse" },
  { headerName: "Vegetariano", field: "vegetarian" },
  { headerName: "Acompanhamento 1", field: "firstSideDish" },
  { headerName: "Acompanhamento 2", field: "secondSideDish" },
  { headerName: "Sobremesa", field: "dessert" }
];

const gridOptions = {
  rowSelection: "single",
  suppressCellSelection: true
};

const overlayNoRowsTemplate =
  '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Não foi encontrado cardápio disponível para o período informado.</span>';

export default function Cardapio() {
  const [baseDay, setBaseDay] = useState(new Date());
  const [startOfWeek, setStartOfWeek] = useState("");
  const [endOfWeek, setEndOfWeek] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [message, setMessage] = useState("");
  const [salad, setSalad] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [vegetarian, setVegetarian] = useState("");
  const [firstSideDish, setFirstSideDish] = useState("");
  const [secondSideDish, setSecondSideDish] = useState("");
  const [dessert, setDessert] = useState("");
  const [day, setDay] = useState(format(new Date(), "yyyy-MM-dd"));
  const [closed, setClosed] = useState(false);
  const [state, setState] = useState("VIEW");
  const [menu, setMenu] = useState([]);
  const [formattedMenu, setFormattedMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState({});
  const [gridApi, setGridApi] = useState({});
  $('[data-toggle="tooltip"]').tooltip();

  const updateBaseDay = async direction => {
    if (direction === "FORWARD") {
      setBaseDay(addBusinessDays(baseDay, 5));
    } else if (direction === "BACKWARDS") {
      setBaseDay(addBusinessDays(baseDay, -5));
    }
  };

  const updateRangeDate = async () => {
    setStartOfWeek(format(sWeek(baseDay, { weekStartsOn: 1 }), "dd/MM/yyyy"));
    setEndOfWeek(
      format(
        addBusinessDays(sWeek(baseDay, { weekStartsOn: 1 }), 4),
        "dd/MM/yyyy"
      )
    );
    await getWeekMenu();
  };

  const getWeekMenu = async () => {
    try {
      const response = await getMenu(format(baseDay, "yyyy-MM-dd"));
      setMenu(response.data);
    } catch (e) {
      setMessage("Falha ao recuperar cardápio da semana!");
      $(".toast").toast("show");
    }
  };

  const formatMenu = () => {
    setFormattedMenu(
      menu.map(menu => {
        menu.day = format(parseISO(menu.day.split("T")[0]), "dd/MM/yyyy");
        if (menu.closed) {
          menu.salad = "Fechado";
          menu.mainCourse = "Fechado";
          menu.vegetarian = "Fechado";
          menu.firstSideDish = "Fechado";
          menu.secondSideDish = "Fechado";
          menu.dessert = "Fechado";
        }
        return menu;
      })
    );
  };
  const addNewMenu = async () => {
    try {
      await addMenu({
        salad,
        mainCourse,
        vegetarian,
        firstSideDish,
        secondSideDish,
        dessert,
        day,
        closed
      });
      setMessage(`Cardápio do dia ${day} adicionado com sucesso!`);
      await getWeekMenu();
    } catch (e) {
      setMessage(`Falha ao adicionar cardápio do dia ${day}!`);
    }
    $(".toast").toast("show");
  };

  const getAllIngredients = async () => {
    try {
      const response = await getIngredients();
      setIngredientsList(response.data);
    } catch (e) {
      setMessage("Falha ao recuperar ingredientes!");
      $(".toast").toast("show");
    }
  };

  const onGridReady = params => {
    setGridApi(params.api);
  };

  const onSelectionChanged = () => {
    setSelectedMenu(...gridApi.getSelectedRows());
  };

  const removeMenu = async () => {
    if (!_.isEmpty(selectedMenu)) {
      try {
        await deleteMenu(selectedMenu.id);
        setMessage(`Menu do dia ${selectedMenu.day} removido com sucesso!`);
        await getWeekMenu();
      } catch (e) {
        setMessage(`Falha ao remover menu do dia ${selectedMenu.day}.`);
      }
    } else {
      setMessage("Selecione um menu para remover!");
    }
    $(".toast").toast("show");
  };

  const setEditState = () => {
    if (!_.isEmpty(selectedMenu)) {
      setState("EDIT");
      setSalad(selectedMenu.salad);
      setMainCourse(selectedMenu.mainCourse);
      setVegetarian(selectedMenu.vegetarian);
      setFirstSideDish(selectedMenu.firstSideDish);
      setSecondSideDish(selectedMenu.secondSideDish);
      setDessert(selectedMenu.dessert);
      setDay(
        format(parse(selectedMenu.day, "dd/MM/yyyy", new Date()), "yyyy-MM-dd")
      );
      setClosed(selectedMenu.closed);
    } else {
      setMessage("Selecione um menu para editar!");
      $(".toast").toast("show");
    }
  };

  const saveMenu = async () => {
    try {
      await updateMenu(
        {
          salad,
          mainCourse,
          vegetarian,
          firstSideDish,
          secondSideDish,
          dessert,
          day,
          closed
        },
        selectedMenu.id
      );
      setMessage(`Cardápio do dia ${day} atualizado.`);
      setState("VIEW");
      await getWeekMenu();
    } catch (e) {
      setMessage(`Falha ao alterar cardápio do dia ${day}.`);
    }
    $(".toast").toast("show");
  };

  useEffect(() => {
    updateRangeDate();
    if (localStorage.getItem("role") === "admin") getAllIngredients();
  }, [baseDay]);

  useEffect(() => {
    formatMenu();
  }, [menu]);

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <button
          onClick={() => updateBaseDay("BACKWARDS")}
          type="button"
          className="btn btn-outline-primary"
          data-toggle="tooltip"
          data-placement="top"
          title="Clique para visualizar o cardápio da semana anterior."
        >
          <FaLessThan />
        </button>
        <h3 className="px-3 mt-2">
          Cardápio de {`${startOfWeek} a ${endOfWeek}`}
        </h3>
        <button
          onClick={() => updateBaseDay("FORWARD")}
          type="button"
          className="btn btn-outline-primary"
          data-toggle="tooltip"
          data-placement="top"
          title="Clique para visualizar o cardápio da próxima semana."
        >
          <FaGreaterThan />
        </button>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <div
          className="ag-theme-balham"
          style={{ height: "200px", width: "100%" }}
        >
          <AgGridReact
            gridOptions={gridOptions}
            columnDefs={columnDefs}
            rowData={formattedMenu}
            onGridReady={params => onGridReady(params)}
            onSelectionChanged={onSelectionChanged}
            overlayNoRowsTemplate={overlayNoRowsTemplate}
          ></AgGridReact>
        </div>
      </div>
      {localStorage.getItem("role") === "admin" ? (
        <>
          <div className="d-flex mt-2" style={{ justifyContent: "flex-end" }}>
            <button
              onClick={() => setEditState()}
              type="button"
              className="btn btn-primary btn-sm"
              data-toggle="tooltip"
              data-placement="top"
              title="Selecione uma linha e clique aqui para editá-la."
            >
              Editar
              <FaPencilAlt className="fa-sm ml-1 mb-1" />
            </button>
            <button
              onClick={() => removeMenu()}
              type="button"
              className="btn btn-danger btn-sm ml-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Selecione uma linha e clique aqui para exclui-lá."
            >
              Excluir
              <FaTrash className="fa-sm ml-1 mb-1" />
            </button>
          </div>
          <div>
            <hr />
            <form>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="salad">Salada</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="salad"
                    value={salad}
                    onChange={event => setSalad(event.target.value)}
                  >
                    <option value="choose">Escolha...</option>
                    {ingredientsList.map((ingredient, index) => {
                      if (ingredient.type === "salad") {
                        return <option key={index}>{ingredient.name}</option>;
                      } else return <></>;
                    })}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="mainCourse">Principal</label>
                  <select
                    value={mainCourse}
                    onChange={event => setMainCourse(event.target.value)}
                    className="custom-select mr-sm-2"
                    id="mainCourse"
                  >
                    <option value="choose">Escolha...</option>
                    {ingredientsList.map((ingredient, index) => {
                      if (ingredient.type === "main_course") {
                        return <option key={index}>{ingredient.name}</option>;
                      } else return <></>;
                    })}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="vegeratian">Vegetariano</label>
                  <select
                    value={vegetarian}
                    onChange={event => setVegetarian(event.target.value)}
                    className="custom-select mr-sm-2"
                    id="vegetarian"
                  >
                    <option value="choose">Escolha...</option>
                    {ingredientsList.map((ingredient, index) => {
                      if (ingredient.type === "vegetarian") {
                        return <option key={index}>{ingredient.name}</option>;
                      } else return <></>;
                    })}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="firstSideDish">Acompanhamento 1</label>
                  <select
                    value={firstSideDish}
                    onChange={event => setFirstSideDish(event.target.value)}
                    className="custom-select mr-sm-2"
                    id="firstSideDish"
                  >
                    <option value="choose">Escolha...</option>
                    {ingredientsList.map((ingredient, index) => {
                      if (ingredient.type === "side_dish") {
                        return <option key={index}>{ingredient.name}</option>;
                      } else return <></>;
                    })}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="secondSideDish">Acompanhamento 2</label>
                  <select
                    value={secondSideDish}
                    onChange={event => setSecondSideDish(event.target.value)}
                    className="custom-select mr-sm-2"
                    id="secondSideDish"
                  >
                    <option value="choose">Escolha...</option>
                    {ingredientsList.map((ingredient, index) => {
                      if (ingredient.type === "side_dish") {
                        return <option key={index}>{ingredient.name}</option>;
                      } else return <></>;
                    })}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="dessert">Sobremesa</label>
                  <select
                    value={dessert}
                    onChange={event => setDessert(event.target.value)}
                    className="custom-select mr-sm-2"
                    id="dessert"
                  >
                    <option value="choose">Escolha...</option>
                    {ingredientsList.map((ingredient, index) => {
                      if (ingredient.type === "dessert") {
                        return <option key={index}>{ingredient.name}</option>;
                      } else return <></>;
                    })}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="day">Dia</label>
                  <input
                    className="form-control"
                    type="date"
                    value={day}
                    onChange={event => setDay(event.target.value)}
                    id="day"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="closed">Fechado</label>
                  <select
                    value={closed}
                    onChange={event => setClosed(event.target.value)}
                    className="custom-select mr-sm-2"
                    id="firstSideDish"
                  >
                    <option value="false">Não</option>
                    <option value="true">Sim</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="d-flex mt-2" style={{ justifyContent: "flex-end" }}>
              <button
                disabled={state === "VIEW"}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => saveMenu()}
                data-toggle="tooltip"
                data-placement="top"
                title="Clique aqui para salvar as edições feitas em um menu."
              >
                Salvar
                <FaSave className="fa-sm ml-1 mb-1" />
              </button>
              <button
                onClick={() => addNewMenu()}
                type="button"
                className="btn btn-success btn-sm ml-2"
                data-toggle="tooltip"
                data-placement="top"
                title="Caso o restaurante esteja aberto no dia, preencha todos os campos ao lado e clique aqui para inserir."
              >
                Novo
                <FaPlus className="fa-sm ml-1 mb-1" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <Toast message={message} />
    </>
  );
}

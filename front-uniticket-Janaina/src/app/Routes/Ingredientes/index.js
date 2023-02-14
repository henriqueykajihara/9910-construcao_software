import React, { useState, useEffect } from "react";
import { FaPencilAlt, FaTrash, FaPlus, FaSave } from "react-icons/fa";
import $ from "jquery";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {
  addIngredient,
  getIngredients,
  updateIngredient,
  removeIngredient
} from "../../utils/api";
import Toast from "../../../components/Toast/toast";

export default function Ingredientes() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredientType, setIngredientType] = useState("choose");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("VIEW");
  $('[data-toggle="tooltip"]').tooltip();

  const setEditState = () => {
    setState("EDIT");
    setIngredient(selectedIngredient);
  };

  const deleteIngredient = async () => {
    try {
      await removeIngredient({ name: selectedIngredient });
      await getAllIngredients();
      setMessage(`${selectedIngredient} excluído com sucesso!`);
    } catch (e) {
      console.log(e);
      setMessage("Falha ao excluir ingrediente!");
    }
    $(".toast").toast("show");
  };

  const getAllIngredients = async () => {
    try {
      const response = await getIngredients();
      setIngredientsList(response.data);
      setSelectedIngredient(response.data[0].name);
    } catch (e) {
      setMessage("Falha ao recuperar ingredientes!");
      $(".toast").toast("show");
    }
  };

  const addNewIngredient = async () => {
    try {
      await addIngredient({ name: ingredient, type: ingredientType });
      await getAllIngredients();
      setMessage(`${ingredient} adicionado com sucesso!`);
      setState("VIEW");
    } catch (e) {
      setMessage("Falha ao adicionar ingrediente!");
    }
    $(".toast").toast("show");
  };

  const saveIngredient = async () => {
    try {
      await updateIngredient({
        oldName: selectedIngredient,
        newName: ingredient,
        newType: ingredientType
      });
      await getAllIngredients();
      setState("VIEW");
    } catch (e) {
      setMessage("Falha ao editar ingrediente!");
      $(".toast").toast("show");
    }
  };

  useEffect(() => {
    getAllIngredients();
  }, []);

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <h2 className="px-3 mt-2">Ingredientes</h2>
      </div>
      <div>
        <hr />
        <div>
          <select
            value={selectedIngredient}
            onChange={event => setSelectedIngredient(event.target.value)}
            className="custom-select"
          >
            <optgroup label="Salada">
              {ingredientsList.map((ingredient, index) => {
                if (ingredient.type === "salad") {
                  return <option key={index}>{ingredient.name}</option>;
                } else return <></>;
              })}
            </optgroup>
            <optgroup label="Principal">
              {ingredientsList.map((ingredient, index) => {
                if (ingredient.type === "main_course") {
                  return <option key={index}>{ingredient.name}</option>;
                } else return <></>;
              })}
            </optgroup>
            <optgroup label="Vegetariano">
              {ingredientsList.map((ingredient, index) => {
                if (ingredient.type === "vegetarian") {
                  return <option key={index}>{ingredient.name}</option>;
                } else return <></>;
              })}
            </optgroup>
            <optgroup label="Acompanhamento">
              {ingredientsList.map((ingredient, index) => {
                if (ingredient.type === "side_dish") {
                  return <option key={index}>{ingredient.name}</option>;
                } else return <></>;
              })}
            </optgroup>
            <optgroup label="Sobremesa">
              {ingredientsList.map((ingredient, index) => {
                if (ingredient.type === "dessert") {
                  return <option key={index}>{ingredient.name}</option>;
                } else return <></>;
              })}
            </optgroup>
          </select>
        </div>
        <div className="d-flex mt-2" style={{ justifyContent: "flex-end" }}>
          <button
            onClick={() => setEditState()}
            type="button"
            className="btn btn-primary btn-sm"
            data-toggle="tooltip"
            data-placement="top"
            title="Selecione um ingrediente e clique aqui para editá-lo."
          >
            Editar
            <FaPencilAlt className="fa-sm ml-1 mb-1" />
          </button>
          <button
            onClick={() => deleteIngredient()}
            type="button"
            className="btn btn-danger btn-sm ml-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Selecione um ingrediente e clique aqui para excluí-lo."
          >
            Excluir
            <FaTrash className="fa-sm ml-1 mb-1" />
          </button>
        </div>
      </div>
      <div>
        <hr />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Nome</label>
              <input
                className="form-control"
                type="text"
                value={ingredient}
                onChange={event => setIngredient(event.target.value)}
                id="name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="type">Tipo</label>
              <select
                value={ingredientType}
                onChange={event => setIngredientType(event.target.value)}
                className="custom-select mr-sm-2"
                id="type"
              >
                <option key="choose1" value="choose">
                  Escolha...
                </option>
                <option key="salad1" value="salad">
                  Salada
                </option>
                <option key="main_course1" value="main_course">
                  Principal
                </option>
                <option key="vegetarian1" value="vegetarian">
                  Vegetariano
                </option>
                <option key="side_dish1" value="side_dish">
                  Acompanhamento
                </option>
                <option key="dessert1" value="dessert">
                  Sobremesa
                </option>
              </select>
            </div>
          </div>
        </form>
        <div className="d-flex" style={{ justifyContent: "flex-end" }}>
          <button
            disabled={state === "VIEW"}
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => saveIngredient()}
            data-toggle="tooltip"
            data-placement="top"
            title="Clique aqui para salvar as edições feitas em um ingrediente."
          >
            Salvar
            <FaSave className="fa-sm ml-1 mb-1" />
          </button>
          <button
            onClick={() => addNewIngredient()}
            type="button"
            className="btn btn-success btn-sm ml-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Preencha os campos nome e tipo e clique aqui para inserir."
          >
            Novo
            <FaPlus className="fa-sm ml-1 mb-1" />
          </button>
        </div>
      </div>
      <Toast message={message} />
    </>
  );
}

const getWeek = () => {
	const curr = new Date() 
	let week = []

	for (let i = 1; i <= 7; i++) {
		let first = curr.getDate() - curr.getDay() + i 
		let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
		day = formatDate(day);
		week.push(day) 
	}
	return week
};

const formatDate = (date) => {
	const data = new Date(date),
		dia  = data.getDate().toString(),
		diaF = (dia.length === 1) ? '0' + dia : dia,
		mes  = (data.getMonth()+1).toString(),
		mesF = (mes.length === 1) ? '0' + mes : mes,
		anoF = data.getFullYear();
	return diaF+"/"+mesF+"/"+anoF;
};

const formatDateHour = (date = new Date()) => {
	const data = new Date(date),
		dia  = data.getDate().toString(),
		diaF = (dia.length === 1) ? '0' + dia : dia,
		mes  = (data.getMonth()+1).toString(),
		mesF = (mes.length === 1) ? '0' + mes : mes,
		anoF = data.getFullYear(),
		hora = data.getHours(),
		horaF = (hora.length === 1) ? '0' + hora : hora,
		minutos = data.getMinutes(),
		minutosF = (minutos.length === 1) ? '0' + minutos : minutos,
		segundos = data.getSeconds(),
		segundosF = (segundos.length === 1) ? '0' + segundos : segundos;
	return diaF+"/"+mesF+"/"+anoF + " " + horaF + ":" + minutosF + ":" + segundosF;
};

export {
		getWeek,
		formatDate,
		formatDateHour
};

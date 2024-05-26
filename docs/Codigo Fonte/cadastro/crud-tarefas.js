/* 
TAREFAS
number: id
string: descricao
number: data
number: prioridade
*/

function createTarefa(tarefa) {
  let ultimoId = parseInt(localStorage.getItem("ultimo_id_tarefa")) || 0;
  let novoId = ultimoId + 1;
  tarefa.id = novoId;
  localStorage.setItem("ultimo_id_tarefa", novoId);

  let tarefas = readTarefas();
  tarefas.push(tarefa);
  updateTarefas(tarefas);
}

function readTarefas() {
  return JSON.parse(localStorage.getItem("tarefas")) || [];
}

function readTarefa(idTarefa) {
  let tarefas = readTarefas();
  return tarefas.find((tarefa) => tarefa.id == idTarefa);
}

function updateTarefas(tarefas) {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function updateTarefa(tarefaAtualizada) {
  let tarefas = readTarefas();
  let indice = tarefas.findIndex((tarefa) => tarefa.id == tarefaAtualizada.id);
  tarefas[indice] = tarefaAtualizada;
  updateTarefas(tarefas);
}

function deleteTarefa(idExcluida) {
  let tarefas = readTarefas();
  let indice = tarefas.findIndex((tarefa) => tarefa.id == idExcluida);
  tarefas.splice(indice, 1);
  updateTarefas(tarefas);
}

class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nomeDisciplina").value;
        const codigoDisciplina = document.querySelector("#codigoDisciplina").value;
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigoDisciplina, nomeDisciplina);
            alert('Disciplina inserida com sucesso!');
        }
        else {
            alert('Não foi possível inserir a disciplina.')
        }
    }

    mostrarDisciplinaNoHTML(codigoDisciplina, nomeDisciplina) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${codigoDisciplina} - ${nomeDisciplina}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigoDisciplina);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo)
    }

}

//
//
//
// for (let aluno of alunos) {
//     // colocar no html nome - idade
//     mostrarAlunoNoHTML(aluno.nome, aluno.idade);
// }
//
// function inserirAluno() {
// }
//
//


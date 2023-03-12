class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        let disciplina = new Disciplina(codigo, nome);
        return this.repositorio.inserir(disciplina);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorCodigo(codigo) {
        return this.repositorio.buscarPorCodigo(codigo);
    }
}

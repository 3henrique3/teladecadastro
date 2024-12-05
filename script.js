function mostrarTela(tela) {
    document.querySelectorAll('.tela').forEach(section => section.style.display = 'none');
    document.getElementById(tela).style.display = 'block';
}

function adicionarCliente() {
    const nome = document.getElementById("nomeCliente").value.trim();
    const email = document.getElementById("emailCliente").value.trim();
    const telefone = document.getElementById("telefoneCliente").value.trim();

    if (!nome || !email || !telefone) {
        alert("Preencha todos os campos, por gentileza.");
        return;
    }

    const listaClientes = document.getElementById("listaClientes");
    const item = document.createElement("li");
    item.textContent = `Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`;
    listaClientes.appendChild(item);

    document.getElementById("formClientes").reset();
    alert("Cliente cadastrado");
}

function adicionarProduto() {
    const nome = document.getElementById("nomeProduto").value.trim();
    const categoria = document.getElementById("categoriaProduto").value.trim();
    const preco = document.getElementById("precoProduto").value.trim();

    if (!nome || !categoria || !preco) {
        alert("Preencha todos os campos, por gentileza.");
        return;
    }

    const listaProdutos = document.getElementById("listaProdutos");
    const item = document.createElement("li");
    item.textContent = `Produto: ${nome}, Categoria: ${categoria}, Preço: R$ ${parseFloat(preco).toFixed(2)}`;
    listaProdutos.appendChild(item);

    document.getElementById("formProdutos").reset();
    alert("Produto cadastrado")
}

function adicionarFornecedor() {
    const nome = document.getElementById("nomeFornecedor").value.trim();
    const email = document.getElementById("emailFornecedor").value.trim();
    const telefone = document.getElementById("telefoneFornecedor").value.trim();

    if (!nome || !email || !telefone) {
        alert("Preencha todos os campos, por gentileza.");
        return;
    }

    const listaFornecedores = document.getElementById("listaFornecedores");
    const item = document.createElement("li");
    item.textContent = `Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`;
    listaFornecedores.appendChild(item);

    document.getElementById("formFornecedores").reset();
    alert("Fornecedor(a) cadastrado")
}

function adicionarFuncionario() {
    const nome = document.getElementById("nomeFuncionario").value.trim();
    const email = document.getElementById("emailFuncionario").value.trim();
    const telefone = document.getElementById("telefoneFuncionario").value.trim();

    if (!nome || !email || !telefone) {
        alert("Preencha todos os campos, por gentileza.");
        return;
    }

    const listaFuncionarios = document.getElementById("listaFuncionarios");
    const item = document.createElement("li");
    item.textContent = `Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`;
    listaFuncionarios.appendChild(item);

    document.getElementById("formFuncionarios").reset();
    alert("Funcionário(a) cadastrado");
}

function adicionarBanco() {
    const nome = document.getElementById("nomeBanco").value.trim();
    const numeroConta = document.getElementById("numeroConta").value.trim();
    const instituicao = document.getElementById("instituicao").value;
    const cpfCnpj = document.getElementById("cpfCnpj").value.trim();
    const valorPagamento = document.getElementById("valorPagamento").value.trim();

    if (!nome || !numeroConta || !instituicao || !cpfCnpj || !valorPagamento) {
        alert("Preencha todos os campos, por gentileza.");
        return;
    }

    const listaBancos = document.getElementById("listaBancos");
    const item = document.createElement("li");
    item.textContent = `Nome: ${nome}, Conta: ${numeroConta}, Banco: ${instituicao}, CPF/CNPJ: ${cpfCnpj}, Valor: R$ ${parseFloat(valorPagamento).toFixed(2)}`;
    listaBancos.appendChild(item);

    document.getElementById("formBancos").reset();
    alert("Pagamento realizado");
}

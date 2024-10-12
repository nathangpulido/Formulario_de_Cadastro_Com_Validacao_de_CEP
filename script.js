async function buscarEndereco() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.erro) {
            document.getElementById('cep').value = "CEP inválido.";
        } else {
            document.getElementById('endereco').value = data.logradouro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
            document.getElementById('bairro').value = data.bairro;
        }
    } catch (error) {
        document.getElementById('endereco').value = "Erro ao buscar o endereço.";
    }
}

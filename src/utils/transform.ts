
class TrasformList {


    static transform(argumento:string): { list: string[], conclusion:string} {
 // Remover números 
        if(argumento){
        argumento = argumento.replace(/\d+/g, '');
        argumento = argumento.replace("-", '');
        // Separar premissas e conclusão
        let [premissas, conclusao] = argumento.split('⊢');
        // Criar lista de premissas
        let listaPremissas = premissas.split(',').map(premissa => premissa.trim());
        // Criar objeto com lista de premissas e conclusão
        let dicionario = {
            list: listaPremissas,
            conclusion: conclusao.trim()
        };

        return dicionario
    } else{
        let dicionario = {list: [], conclusion:""}
        return dicionario
    }

        
    }

} 

export default TrasformList;
/* 
Para ajudar o aplicativo de contêiner a entender quando cada aplicativo deve ser exibido,
fornecemos as chamadas "funções de atividade". Cada aplicativo tem uma função de atividade
que simplesmente retorna um booleano, verdadeiro ou falso, para saber se o aplicativo está ativo ou não. 
*/
export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
} 

export function header(): boolean {
  return true;
}

export function home(): boolean {
  return true; 
}

export function footer(): boolean {
  return true;
}

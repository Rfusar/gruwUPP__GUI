export function stile_elemento(stile, elemento) {
    for (const key in stile) { elemento.style[key] = stile[key] }
}

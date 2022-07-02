export class Aprendiz{
    id?: number;
    nombre : string;
    apellido : string;
    tipodoc : string;
    documento : string;
    eps : string;
    categoria : string;
    valorcurso : any;
    abono : any;

    constructor(nombre: string, apellido: string, tipodoc: string, documento: string, eps: string, categoria: string, valorcurso: any, abono: any){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipodoc = tipodoc;
        this.documento = documento;
        this.eps = eps;
        this.categoria = categoria;
        this.valorcurso = valorcurso;
        this.abono = abono;
    }

}











//interfaces: moldes que representan estructuras de datos
//clase: es un molde para crear un objetos

export  interface IClub {
  id: number;
  name: string;
}
interface IRes extends IClub  {
  msm: string;

}
export const clubes: IClub[] = [];

const createClub = (id:number, name:string): IRes => {
  clubes.push({id, name});
  return {msm: 'club created',name, id};
  
};

export default createClub;
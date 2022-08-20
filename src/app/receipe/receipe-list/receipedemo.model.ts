export class receipedemo
{
    public name:string='';
    public receipeid:number;
    public receipeimg:string;
    public desc:string;
    constructor (name:string,id:number,imgpath:string,desc:string)
    {
      this.name=name;
      this.receipeid=id;
      this.receipeimg=imgpath;
      this.desc=desc;
    }
}
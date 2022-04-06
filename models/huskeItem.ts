export class huskeItem{
  
  private _id : number;
  public get id() : number {
      return this._id;
  }
  public set id(v : number) {
      this._id = v;
  }
  
  private _navn : string;
  public get navn() : string {
      return this._navn;
  }
  public set navn(v : string) {
      this._navn = v;
  }
  
  private _completed : boolean;
  public get completed() : boolean {
      return this._completed;
  }
  public set completed(v : boolean) {
      this._completed = v;
  }
  
}
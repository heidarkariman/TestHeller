export class ToolUsage {
   constructor(
     public tool_id :string = '',
     public count : number = 0,
     public time : number = 0,
     public first : string = '',
     public last : string = '',
     public cposmin: number = 0,
     public cposmax: number = 0,
     public uposmin: number = 0,
     public uposmax : number = 0,
   ) {}
 }

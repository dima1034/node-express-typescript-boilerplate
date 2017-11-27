export interface IDbContext {
    add(data: any): Promise<any>;
    destroy(id: number): Promise<any>;
    update(id: number, data: any): Promise<any>;
    findById(id: number): Promise<any>;
    findAll(): Promise<any>;
}

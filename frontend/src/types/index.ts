export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface User {
    id: string;
    name: string;
    role: UserRole;
}

export enum UserRole {
    Employee = 'Employee',
    TeamLeader = 'TeamLeader',
    Director = 'Director'
}

export interface ComparisonRequest {
    productIds: string[];
    userId: string;
}

export interface ComparisonResponse {
    products: Product[];
    user: User;
}
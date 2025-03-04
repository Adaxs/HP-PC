export interface User {
    id: string;
    name: string;
    role: UserRole;
}

export enum UserRole {
    EMPLOYEE = 'employee',
    TEAM_LEADER = 'team_leader',
    DIRECTOR = 'director',
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    specifications: Record<string, any>;
}

export interface ComparisonRequest {
    productIds: string[];
    userId: string;
}

export interface ComparisonResponse {
    products: Product[];
    user: User;
}
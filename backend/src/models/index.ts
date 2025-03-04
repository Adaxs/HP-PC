export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface UserRole {
    id: string;
    name: 'employee' | 'team_leader' | 'director';
    permissions: string[];
}
export type UserRole = "admin" | "user"

export interface User {
  id: number
  username: string
  name: string
  role: UserRole
  createdAt: Date
}

export interface UserWithPassword extends User {
  password: string
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, password: string, name: string) => Promise<void>
  logout: () => void
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  createdAt: Date
}


export type TicketStatus = "open" | "in-progress" | "resolved";
export type TicketPriority = "low" | "medium" | "high";

export type Ticket = {
  id: number;
  ticketNumber: string;
  userId: number;
  subject: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: Date;
  updatedAt?: Date;
};

export interface Order {
  id: number
  orderNumber: string
  userId: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  createdAt: Date
  items: OrderItem[]
}

export interface OrderItem {
  productId: number
  quantity: number
  price: number
}

export interface Company {
  id: number
  name: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  taxId: string
  foundedYear: number
}

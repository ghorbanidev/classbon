export interface Notification {
    id: string;
    duration?: number;
    message: string;
    type: NotificationType;
}

export type NotificationType = "succsess" | "error" | "info" | "warning"
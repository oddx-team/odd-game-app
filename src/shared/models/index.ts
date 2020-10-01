export const TOAST_CODES: Record<string, string> = {
  login_success: 'Login successfully!',
  logout_success: 'Logout successfully!',
  save_success: 'Save successfully!',
  username_len_short: 'Username must be from three characters!',
  username_picked: 'Username is picked already',
  error: 'Something went wrong!'
}

export interface Toast {
  type: string;
  title: string;
  duration: number;
  message?: string;
}
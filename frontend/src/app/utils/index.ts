import style from '../style.local.css';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export function omit<T extends object, K extends keyof T>(
  target: T,
  ...omitKeys: K[]
): Omit<T, K> {
  return (Object.keys(target) as K[]).reduce(
    (res, key) => {
      if (!omitKeys.includes(key)) {
        res[key] = target[key];
      }
      return res;
    },
    {} as any,
  );
}

export const confirmDialog = Swal.mixin({
  confirmButtonClass: `${style.button} ${style.primary}`,
  cancelButtonClass: `${style.button} ${style.primary} ${style.hollow}`,
  buttonsStyling: false,
});

export function toastNotify(message: string) {
  return toast(message, {
    className: style.toaster,
  });
}

import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function popupMessageAlert(message) {
  Swal.fire(message);
}
export function popupQuestionAlert(problem, message) {
  Swal.fire(`${problem}?`, message, "question");
}
export function popupMessagePositionAlert(position, message) {
  Swal.fire({
    position: position,
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
export function popupSucessAndConformationAlert(
  isSuccess,
  titel,
  message = ""
) {
  var icon = !!isSuccess ? `success` : `error`;
  Swal.fire({
    icon: icon,
    title: titel,
    text: message,
  });
}
export async function popupDeleteConformationAlert(message) {
  const permission = await Swal.fire({
    title: "Are you sure?",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  if (!!permission) {
    return permission.isConfirmed;
  }
}
export const fileDownloader = (url) => window.open(url, "_blank");

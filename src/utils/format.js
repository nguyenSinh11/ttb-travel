export function formatVND(n) {
  return new Intl.NumberFormat("vi-VN").format(n) + "₫";
}

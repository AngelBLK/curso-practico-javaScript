const calcularPrecioConDescuento = (precio, descuento ) => {
    const porcentajePrecioConDescuento = 100 - descuento,
    precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const priceDiscount = () => {
    const $inputPrice = document.getElementById("inputPrice"),
    $inputDiscount = document.getElementById("inputDiscount"),
    price = $inputPrice.value,
    discount = $inputDiscount.value,
    $resultPrice = document.querySelector(".resultPrice"),
    $inputCoupon = document.getElementById("inputCoupon"),
    coupon = $inputCoupon.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    let precioConCupon;
    if ($inputCoupon.value === ""){    
        $resultPrice.innerHTML = `El precio con descuento es: <strong>$${precioConDescuento}</strong>`;
    }
    else if($inputCoupon.value === "JuanDC_es_Batman" ){
        precioConCupon = calcularPrecioConDescuento(precioConDescuento, 15);
        $resultPrice.innerHTML = `El precio con descuento es: <strong>$${precioConCupon}</strong>`;
    }
    else if($inputCoupon.value === "pero_no_le_digas_a_nadie" ){
        precioConCupon = calcularPrecioConDescuento(precioConDescuento, 30);
        $resultPrice.innerHTML = `El precio con descuento es: <strong>$${precioConCupon}</strong>`;
    }

    else if($inputCoupon.value === "es_un_secreto" ){
        precioConCupon = calcularPrecioConDescuento(precioConDescuento, 25);
        $resultPrice.innerHTML = `El precio con descuento es: <strong>$${precioConCupon}</strong>`;
    }else {
        alert(`El cupon ${coupon} no esta disponible`)
    }


}
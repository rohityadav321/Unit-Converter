window.onload = function () {
    var prop = document.getElementById('property');
    var input = document.getElementById('input');
    var result = document.getElementById('output');
    var inputType = document.getElementById('unit');
    var resultType = document.getElementById('uni_t');
    var inputTypeValue, resultTypeValue, propValue;
    var m = document.getElementById('m');
    var km = document.getElementById('km');
    var inc = document.getElementById('in');
    var mi = document.getElementById('mi');
    var me = document.getElementById('m_');
    var kmr = document.getElementById('km_');
    var inch = document.getElementById('in_');
    var mil = document.getElementById('mi_');

    input.addEventListener('keyup', myRes);
    inputType.addEventListener('change', myRes);
    resultType.addEventListener('change', myRes);
    prop.addEventListener('change', myRes);

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    propValue = prop.value;

    function myRes() {
        inputTypeValue = inputType.value;
        resultTypeValue = resultType.value;
        propValue = prop.value;

        if (propValue === "length") {

            if (inputTypeValue === "meter" && resultTypeValue === "meter") {
                result.value = Number(input.value);
            } else
                if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
                    result.value = Number(input.value) * 0.001;
                } else if (inputTypeValue === "meter" && resultTypeValue === "miles") {
                    result.value = Number(input.value) / 1609.344;
                } else if (inputTypeValue === "meter" && resultTypeValue === "inches") {
                    result.value = Number(input.value) * 39.3701;
                } else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
                    result.value = Number(input.value) * 1000;
                } else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
                    result.value = Number(input.value);
                } else if (inputTypeValue === "kilometer" && resultTypeValue === "miles") {
                    result.value = Number(input.value) * 0.621371;
                } else if (inputTypeValue === "kilometer" && resultTypeValue === "inches") {
                    result.value = Number(input.value) * 393701.1;
                } else if (inputTypeValue === "inches" && resultTypeValue === "meter") {
                    result.value = Number(input.value) / 39.3701;
                } else if (inputTypeValue === "inches" && resultTypeValue === "kilometer") {
                    result.value = Number(input.value) / 393701.1;
                } else if (inputTypeValue === "inches" && resultTypeValue === "miles") {
                    result.value = Number(input.value) / 63360;
                } else if (inputTypeValue === "inches" && resultTypeValue === "inches") {
                    result.value = Number(input.value);
                } else if (inputTypeValue === "miles" && resultTypeValue === "meter") {
                    result.value = Number(input.value) * 1609.34;
                } else if (inputTypeValue === "miles" && resultTypeValue === "kilometer") {
                    result.value = Number(input.value) * 1.6093;
                } else if (inputTypeValue === "miles" && resultTypeValue === "inches") {
                    result.value = Number(input.value) * 63360;
                } else if (inputTypeValue === "miles" && resultTypeValue === "miles") {
                    result.value = Number(input.value);
                }

        } else if (propValue === "weight") {

            {
                m.value = "gram";
                m.text = "gram";

                km.value = "kilogram";
                km.text = "kilogram";

                inc.value = "pound";
                inc.text = "pound";

                mi.value = "tonne";
                mi.text = "tonne";

                me.value = "gram";
                me.text = "gram";

                kmr.value = "kilogram";
                kmr.text = "kilogram";

                inch.value = "pound";
                inch.text = "pound";

                mil.value = "tonne";
                mil.text = "tonne";
            }
            if (inputTypeValue === "gram" && resultTypeValue === "gram") {
                result.value = Number(input.value);
            } else if (inputTypeValue === "gram" && resultTypeValue === "kilogram") {
                result.value = Number(input.value) / 1000;
            } else if (inputTypeValue === "gram" && resultTypeValue === "pound") {
                result.value = Number(input.value) / 453.592;
            } else if (inputTypeValue === "gram" && resultTypeValue === "tonne") {
                result.value = Number(input.value) / 907184.4;
            } else if (inputTypeValue === "kilogram" && resultTypeValue === "gram") {
                result.value = Number(input.value) * 1000;
            } else if (inputTypeValue === "kilogram" && resultTypeValue === "kilogram") {
                result.value = Number(input.value);
            } else if (inputTypeValue === "kilogram" && resultTypeValue === "pound") {
                result.value = Number(input.value) * 2.205;
            } else if (inputTypeValue === "kilogram" && resultTypeValue === "tonne") {
                result.value = Number(input.value) * 907.185;
            } else if (inputTypeValue === "pound" && resultTypeValue === "gram") {
                result.value = Number(input.value) * 453.592;
            } else if (inputTypeValue === "pound" && resultTypeValue === "kilogram") {
                result.value = Number(input.value) / 2.205;
            } else if (inputTypeValue === "pound" && resultTypeValue === "pound") {
                result.value = Number(input.value);
            } else if (inputTypeValue === "pound" && resultTypeValue === "tonne") {
                result.value = Number(input.value) / 2000;
            } else if (inputTypeValue === "tonne" && resultTypeValue === "gram") {
                result.value = Number(input.value) * 1e+6;
            } else if (inputTypeValue === "tonne" && resultTypeValue === "kilogram") {
                result.value = Number(input.value) * 1000;
            } else if (inputTypeValue === "tonne" && resultTypeValue === "pound") {
                result.value = Number(input.value) * 2204.623;
            } else if (inputTypeValue === "tonne" && resultTypeValue === "tonne") {
                result.value = Number(input.value);
            }

        }
        else if (propValue === "temperature") {

            {
                m.value = "celcius";
                m.text = "celcius";

                km.value = "kelvin";
                km.text = "kelvin";

                inc.value = "fahrenheit";
                inc.text = "fahrenheit";

                unit.remove(4);

                me.value = "celcius";
                me.text = "celcius";

                kmr.value = "kelvin";
                kmr.text = "kelvin";

                inch.value = "fahrenheit";
                inch.text = "fahrenheit";

                uni_t.remove(4);
            } if (inputTypeValue === "celcius" && resultTypeValue === "fahrenheit") {
                result.value = Number(input.value) * 9 / 5 + 32;
            } else if (inputTypeValue === "fahrenheit" && resultTypeValue === "celcius") {
                result.value = (Number(input.value) - 32) * (5 / 9);
            } else if (inputTypeValue === "kelvin" && resultTypeValue === "kelvin") {
                result.value = Number(input.value);
            } else
                if (inputTypeValue === "celcius" && resultTypeValue === "kelvin") {
                    result.value = Number(input.value) + 273.15;
                } else if (inputTypeValue === "fahrenheit" && resultTypeValue === "kelvin") {
                    result.value = (Number(input.value) - 32) * 5 / 9 + 273.15;
                } else if (inputTypeValue === "kelvin" && resultTypeValue === "celcius") {
                    result.value = Number(input.value) - 273.15;
                } else if (inputTypeValue === "celcius" && resultTypeValue === "celcius") {
                    result.value = Number(input.value);
                } else if (inputTypeValue === "fahrenheit" && resultTypeValue === "fahrenheit") {
                    result.value = Number(input.value);
                } else if (inputTypeValue === "kelvin" && resultTypeValue === "fahrenheit") {
                    result.value = Number(input.value) - 273.15 * 9 / 5 + 32;
                }
        } else if (propValue === "pressure") {

            {
                m.value = "pascal";
                m.text = "pascal";

                km.value = "atm";
                km.text = "atm";

                inc.value = "bar";
                inc.text = "bar";
                unit.remove(4);

                me.value = "pascal";
                me.text = "pascal";

                kmr.value = "atm";
                kmr.text = "atm";

                inch.value = "bar";
                inch.text = "bar";
                uni_t.remove(4);
            }
            if (inputTypeValue === "pascal" && resultTypeValue === "atm") {
                result.value = Number(input.value) / 101325;
            } else if (inputTypeValue === "pascal" && resultTypeValue === "bar") {
                result.value = Number(input.value) * 1e-5;
            } else if (inputTypeValue === "pascal" && resultTypeValue === "pascal") {
                result.value = Number(input.value);
            } else if (inputTypeValue === "atm" && resultTypeValue === "atm") {
                    result.value = Number(input.value);
            } else if (inputTypeValue === "atm" && resultTypeValue === "bar") {
                    result.value = Number(input.value) * 1.01325;
            } else if (inputTypeValue === "atm" && resultTypeValue === "pascal") {
                    result.value = Number(input.value) * 101325;
            } else if (inputTypeValue === "bar" && resultTypeValue === "atm") {
                        result.value = Number(input.value) / 1.01325;
            } else if (inputTypeValue === "bar" && resultTypeValue === "bar") {
                        result.value = Number(input.value);
            } else if (inputTypeValue === "bar" && resultTypeValue === "pascal") {
                        result.value = Number(input.value) / 1e-5;
            }
        }

    }

}



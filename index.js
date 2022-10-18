var IsLastOperation = true;
var inputVisual = document.getElementById("inputresultado");

function noRepeat(givenid) {
    if (["sum", "minus", "multiplication", "division"].includes(givenid)) {
        this.IsLastOperation = true;
    }
    else {
        this.IsLastOperation = false;
    }
}
function tap(givenid) {
    if (!isNaN(parseInt(givenid))) {
        inputVisual.value += givenid;
        this.IsLastOperation = false;
    }

    else {

        switch (givenid) {
            case "sum":

                if (this.IsLastOperation == false) {
                    inputVisual.value += "+";
                }

                noRepeat(givenid);
                break;


            case "minus":

                if (this.IsLastOperation == false) {
                    inputVisual.value += "-";
                }

                noRepeat(givenid);
                break;

            case "multiplication":
                if (this.IsLastOperation == false) {
                    inputVisual.value += "*";
                }

                noRepeat(givenid);

                break;

            case "division":
                if (this.IsLastOperation == false) {
                    inputVisual.value += "/";
                }
                noRepeat(givenid);

                break;

            case "module":
                if (this.IsLastOperation == false) {
                    inputVisual.value += "%";
                }
                noRepeat(givenid);
                break;

            case "square":
                if (this.IsLastOperation == false) {
                    inputVisual.value += "**";
                }
                noRepeat(givenid);
                break;

            case "clear":
                inputVisual.value = ""
                this.IsLastOperation = true;
                break;

            case "result":
                result = eval(inputVisual.value);
                inputVisual.value = result;
                noRepeat();
                break;

                case "leftparentesis":
                        inputVisual.value += "(";
                        noRepeat();

                break;

                case "rightparentesis": 
                        inputVisual.value += ")";
                        noRepeat();

                break;

                case "erase": 
                let inputV = inputVisual.value
                inputVisual.value = inputVisual.value.substring((0),(inputVisual.value.length-1))
                noRepeat();

        break;
        }

    }
}





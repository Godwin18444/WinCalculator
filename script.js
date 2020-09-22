$(document).ready(function () {
    $('.sin').click(function () {
        $('#champAffichage').append("Math.sin(");
    });
});

$(document).ready(function () {
    $('.cos').click(function () {
        $('#champAffichage').append("Math.cos(");
    });
});

$(document).ready(function () {
    $('.tan').click(function () {
        $('#champAffichage').append("Math.tan(");
    });
});

$(document).ready(function () {
    $('.arcsin').click(function () {
        $('#champAffichage').append("Math.asin(");
    });
});

$(document).ready(function () {
    $('.C').click(function () {
        var p = document.querySelector('#champAffichage');
        p.innerHTML = "<br/> ";
    });
});

$(document).ready(function () {
    $('.arccos').click(function () {
        $('#champAffichage').append("Math.acos(");
    });
});

$(document).ready(function () {
    $('.arctan').click(function () {
        $('#champAffichage').append("Math.atan(");
    });
});

$(document).ready(function () {
    $('.carre').click(function () {
        $('#champAffichage').append("**2");
    });
});


$(document).ready(function () {
    $('.cube').click(function () {
        $('#champAffichage').append("**3");
    });
});

$(document).ready(function () {
    $('.power').click(function () {
        $('#champAffichage').append("**");
    });
});

$(document).ready(function () {
    $('.√').click(function () {
        $('#champAffichage').append("Math.sqrt(");
    });
});

$(document).ready(function () {
    $('.∛').click(function () {
        $('#champAffichage').append("cubique(");
    });
});

$(document).ready(function () {
    $('.π').click(function () {
        var pi = Math.PI;
        $('#champAffichage').append(pi);
    });
});

$(document).ready(function () {
    $('.log').click(function () {
        $('#champAffichage').append("Math.log10(");
    });
});

$(document).ready(function () {
    $('.ln').click(function () {
        $('#champAffichage').append("Math.log(");
    });
});

$(document).ready(function () {
    $('.exp').click(function () {
        $('#champAffichage').append("Math.exp(");
    });
});

$(document).ready(function () {
    $('.DEL').click(function () {
        var recu = document.querySelector('#champAffichage');
        var p = document.querySelector('#champAffichage').innerHTML;
        var taille = p.length;
        var nouvtaille = taille - 1;
        var del = p.slice(0, nouvtaille);
        recu.innerHTML = del;

        if (!p) {
            recu.innerHTML = "<br> ";
        }
    });
});

$(document).ready(function () {
    $('.inverse').click(function () {
        $('#champAffichage').append("1/");
    });
});

$(document).ready(function () {
    $('.inferieur').click(function () {
        $('#champAffichage').append("(");
    });
});

$(document).ready(function () {
    $('.superieur').click(function () {
        $('#champAffichage').append(")");
    });
});

$(document).ready(function () {
    $('.Mod').click(function () {
        $('#champAffichage').append("%");
    });
});

$(document).ready(function () {
    $('.÷').click(function () {
        $('#champAffichage').append("/");
    });
});

$(document).ready(function () {
    $('.factoriel').click(function () {
        $('#champAffichage').append("facto(");
    });
});

$(document).ready(function () {
    $('.1').click(function () {
        $('#champAffichage').append("1");
    });
});

$(document).ready(function () {
    $('.2').click(function () {
        $('#champAffichage').append("2");
    });
});

$(document).ready(function () {
    $('.3').click(function () {
        $('#champAffichage').append("3");
    });
});

$(document).ready(function () {
    $('.4').click(function () {
        $('#champAffichage').append("4");
    });
});

$(document).ready(function () {
    $('.5').click(function () {
        $('#champAffichage').append("5");
    });
});

$(document).ready(function () {
    $('.6').click(function () {
        $('#champAffichage').append("6");
    });
});

$(document).ready(function () {
    $('.7').click(function () {
        $('#champAffichage').append("7");
    });
});

$(document).ready(function () {
    $('.8').click(function () {
        $('#champAffichage').append("8");
    });
});

$(document).ready(function () {
    $('.9').click(function () {
        $('#champAffichage').append("9");
    });
});

$(document).ready(function () {
    $('.plus').click(function () {
        $('#champAffichage').append("+");
    });
});


$(document).ready(function () {
    $('.-').click(function () {
        $('#champAffichage').append("-");
    });
});

$(document).ready(function () {
    $('.x').click(function () {
        $('#champAffichage').append("*");
    });
});

$(document).ready(function () {
    $('.=').click(function () {
        $('#champAffichage').append(" ");
    });
});

$(document).ready(function () {
    $('.nCr').click(function () {
        $('#champAffichage').append("C(");
    });
});

$(document).ready(function () {
    $('.nPr').click(function () {
        $('#champAffichage').append("A(");
    });
});

$(document).ready(function () {
    $('.E').click(function () {
        $('#champAffichage').append("e");
    });
});

$(document).ready(function () {
    $('.•').click(function () {
        $('#champAffichage').append(".");
    });
});

$(document).ready(function () {
    $('.virgule').click(function () {
        $('#champAffichage').append(",");
    });
});

$(document).ready(function () {
    $('.0').click(function () {
        $('#champAffichage').append("0");
    });
});

$(document).ready(function () {
    $('.egal').click(function () {
        var recupe = document.querySelector("#champAffichage");
        var recup = document.querySelector("#champAffichage").textContent;
        var res = eval(recup);
        recupe.innerHTML = "<br>" + res;

        function cubique(n) {
            return n ** (1 / 3);
        };

        function facto(n) {
            factorielle = 1;
            for (var i = 1; i <= n; i++) {
                factorielle = factorielle * i;
            }
            return factorielle;
        };

        function A(n, r) {
            if (n >= r) {
                var arran = facto(n) / facto(n - r)
                return arran;
            } else { return "erreur" }
        };

        function C(n, r) {
            if (n >= r) {
                var combinaison = facto(n) / (facto(n - r) * facto(r))
                return combinaison;
            } else { return "erreur" }
        };
    });
});






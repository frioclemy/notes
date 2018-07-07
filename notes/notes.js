var listNotes = [];

function Calcul()
{	
    var sommeNotes = 0;
    var moyenne = 0;
    var mini = 20;
    var maxi = 0;

    var elt = document.querySelectorAll(".notes");

    for(var i=0;i<elt.length;i++)
    {
        var noteLue = (parseFloat(elt[i].value));

        listNotes.push(noteLue);
        sommeNotes += noteLue;

        if(noteLue > maxi)
        {
            maxi = noteLue;
        }
        if(noteLue < mini)
        {
            mini = noteLue;
        }
    }
    moyenne = sommeNotes / elt.length;

    document.querySelector("#divCalc").setAttribute("visibility", "visible");

    if((moyenne<0) || (moyenne>20))
    {
        alert("Erreur de saisie, calculs impossible");
    }else 
    {
        document.querySelector("#txtNoteMini").value = mini;    
        document.querySelector("#txtNoteMaxi").value = maxi;
        document.querySelector("#txtMoyenne").value = moyenne.toFixed(2);
    }
}

function videNotes()
{
    var node = document.querySelector("#divNotes");
    while(node.firstChild)
    {
        node.removeChild(node.firstChild);
    }

    document.querySelector("#txtNoteMini").value = "";    
    document.querySelector("#txtNoteMaxi").value = "";
    document.querySelector("#txtMoyenne").value = "";
    var listNotes = [];
}

function reinit()
{
    videNotes();
    document.querySelector("#txtNbNotes").value = "";
}

function afficheNotes()
{
    videNotes();

    var eltDiv = document.querySelector("#divNotes");
    var nbNotes = document.querySelector("#txtNbNotes").value;

    if((nbNotes < 1) || (nbNotes > 10)) 
    {
        alert("Veuillez saisir un nombre compris entre 1 et 10 !");
        nbNotes = 0;
    }

    for(var i=1; i<=nbNotes; i++)
    {
        var txt = "txtNote" + i;
        var txtLab = "Note " + i;

        var lab = document.createElement("label");   
        lab.setAttribute("for", txt);
        eltDiv.appendChild(lab);
        var nodeLab = document.createTextNode(txtLab);
        lab.appendChild(nodeLab);

        var inp = document.createElement("input");
        inp.setAttribute("type", "number");
            inp.setAttribute("id", txt);
            inp.setAttribute("class", "notes");
            inp.setAttribute("name", txt);
            inp.setAttribute("min", "0");
            inp.setAttribute("max", "20");
            inp.setAttribute("step", "0.25");
            lab.appendChild(inp);
    }
}

window.onload = function()
{
    var element = document.querySelector("#txtNbNotes");
    element.addEventListener("keypress",function(e)
        {
            if(e.key === "Enter")
            {
                afficheNotes();
            }
        });
    document.querySelector("#cmdCalcul").addEventListener("click", Calcul);
    document.querySelector("#cmdReinit").addEventListener("click", reinit);
}


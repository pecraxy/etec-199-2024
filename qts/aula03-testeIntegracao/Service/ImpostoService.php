<?php 
    function calcImposto($renda){
        if ($renda <= 2259.20){
            return 0;
        }
        if ($renda > 2259.20 && $renda <= 2826.65){
            return $renda * 0.075;
        }
        if ($renda > 2826.65 && $renda <= 3751.05){
            return $renda * 0.15;
        }
        if ($renda > 3751.05 && $renda <= 4664.68){
            return $renda * 0.225;
        }
        if ($renda > 4664.68){
            return $renda * 0.275;
        }
    }

    function getTaxa($renda):String{
        if ($renda <= 2259.20){
            return '0%';
        }
        if ($renda > 2259.20 && $renda <= 2826.65){
            return "7,5%";
        }
        if ($renda > 2826.65 && $renda <= 3751.05){
            return '15%';
        }
        if ($renda > 3751.05 && $renda <= 4664.68){
            return '22,5%';
        }
        if ($renda > 4664.68){
            return '27,5%';
        }
        return 0;
    }
?>
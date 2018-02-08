var event, ok;

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);




switch (event) { // Первый вопрос
    case 1: 
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                
            }
        } while (!ok);
         break;
        
    case 2:
        break;
        
    case 3:
        break;   

    case 4:
        break; 
            
}        
        switch (event) { // Второй вопрос
            case 1: 
                do {
                    ok = false;
                    event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.c0, event);
                    }
                } while (!ok);

                break;
                
            case 2:
                break;
        
            case 3:
                break;   

            case 4:
                break;       
        }
        
        switch (event) { // Третий вопрос
            case 1: 
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                
                break;
                
            case 2:
            
                break;
        
            case 3:
                break;   

            case 4:
                break;       
        }
        
        
alert('Игра окончена');


    function isAnswer( event) {
        if (event==1 || event==2 || event==3 || event==4) {
            
            return true;
        
        }
        else {
            return false;
        }
    
    };
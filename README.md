### Hexlet tests and linter status:
[![Actions Status](https://github.com/WseWild/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/WseWild/frontend-project-44/actions)

### Codeclimate tests status
[![Maintainability](https://api.codeclimate.com/v1/badges/2cc60bb925a741978bc8/maintainability)](https://codeclimate.com/github/WseWild/frontend-project-44/maintainability)

# Учебный прокет Hexlet  "Brain Games"

## Системные требования:
* ##### readline-sync v1.4.10
* ##### Node.js v18.13.0
### Установка Node.js
     Для запуска кода на JavaScript необходимо скачать и установить Node.js.
#### Ubuntu или Ubuntu on Windows
    Первый вариант — сделать это вручную разными способами из документации.
    
    Второй вариант — использовать пакетный менеджер. Откройте терминал и выполните команду установки, соответствующую вашей операционной системе:
##### Установка curl — консольного HTTP клиента, для скачивания скрипта установки node
        sudo apt-get install curl
[![asciicast](https://asciinema.org/a/pvIrZ9ujLhiDudkQNvoz3mWYH.svg)](https://asciinema.org/a/pvIrZ9ujLhiDudkQNvoz3mWYH)
##### скачивание и запуск скрипта инсталлятора для добавления и настройка репозитория в пакетном менеджере
        curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
[![asciicast](https://asciinema.org/a/4O14f6aKrKbqzf15MqKtgwhdA.svg)](https://asciinema.org/a/4O14f6aKrKbqzf15MqKtgwhdA)
##### Теперь можем установить nodejs через пакетный менеджер
        sudo apt install -y nodejs
[![asciicast](https://asciinema.org/a/PKRLdpBRiC4WMOVPv5qmfCOuJ.svg)](https://asciinema.org/a/PKRLdpBRiC4WMOVPv5qmfCOuJ)
* ####  macOS
        https://brew.sh/index_ru.html
        brew install nodejs

### Установка readline-sync
    npm install readline-sync

## Описание игр и примеры запуска кода:
### Игра: "Проверка на чётность"
 Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.
##### Пример запуска brain-even 
[![asciicast](https://asciinema.org/a/C1uQXaMwkwzpsPXqwIsU2uYPi.svg)](https://asciinema.org/a/C1uQXaMwkwzpsPXqwIsU2uYPi)

### Игра: "Калькулятор"
 Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.
##### Пример запуска brain-calc
[![asciicast](https://asciinema.org/a/jGMyAbcnBZvIBpaBaBW4loo3R.svg)](https://asciinema.org/a/jGMyAbcnBZvIBpaBaBW4loo3R)

### Игра "НОД"
Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.
##### Пример запуска brain-gcd
[![asciicast](https://asciinema.org/a/CZECvKyLVjwCg3VbyazX7bTp7.svg)](https://asciinema.org/a/CZECvKyLVjwCg3VbyazX7bTp7)

### Игра "Арифметическая прогрессия"
Пользователю показывается ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Пользователь должен определить это число.
#####  Пример запуска brain-progression
[![asciicast](https://asciinema.org/a/3yoepxQPoMaAnMhR2krVDulGN.svg)](https://asciinema.org/a/3yoepxQPoMaAnMhR2krVDulGN)

### Игра "Простое ли число?"
Пользователю показывается случайное число.  И ему нужно ответить yes, если число простое, или no — если непростое.
###  Пример запуска brain-prime
[![asciicast](https://asciinema.org/a/ahbOCNWBBvbyP0FotQAlAZ9YU.svg)](https://asciinema.org/a/ahbOCNWBBvbyP0FotQAlAZ9YU)
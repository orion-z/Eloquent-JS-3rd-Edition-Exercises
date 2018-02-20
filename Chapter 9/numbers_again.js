let number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

/* 

breaking it down:

/         starting regex
^         beginning of input

(\+|-|)   (escaped) plus | or minus | or nothing

(         
\d+       one or more digits
(\.\d*)?  zero or one (dot followed by zero or more digits)
|         OR
\.\d+     one or more (dot followed by one or more digits)
)         (this block needs to be in)

(         
[eE]      either 'e' or 'E'
(\+|-|)   (escaped) plus | or minus | or nothing
\d+       one or more digits
)?        zero or one of this block

$         end of input
/         ending regex
;    

*/

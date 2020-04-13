USE uniminutodb;
#Por edad de las personas
SELECT datediff(NOW(), fecha_nacimiento) DIV 365.25 AS edad FROM persona;
SELECT  id_persona, nombre, datediff(NOW(), fecha_nacimiento) DIV 365.25 AS edad FROM persona WHERE (datediff(NOW(), fecha_nacimiento) DIV 365.25) = 20;
#Por sexo:
SELECT S.sexo FROM persona P, sexos S WHERE S.id_sexo=P.fk_sexo ORDER BY `P`.`id_persona` ASC;
SELECT P.id_persona, P.nombre, S.sexo FROM persona P, sexos S WHERE S.id_sexo=P.fk_sexo ORDER BY `P`.`id_persona` ASC;
#Por el primer apellido
SELECT primer_Apellido  FROM persona;
SELECT primer_Apellido  FROM persona ORDER BY primer_Apellido ASC;
#Por edad y por sexo
SELECT datediff(NOW(),P.fecha_nacimiento)DIV 365.25 AS edad, S.sexo FROM persona p, sexos S WHERE S.id_sexo=P.fk_sexo ORDER BY P.id_persona ASC;
SELECT P.id_persona, P.nombre, datediff(NOW(),P.fecha_nacimiento)DIV 365.25 AS edad, S.sexo FROM persona p, sexos S WHERE S.id_sexo=P.fk_sexo ORDER BY P.id_persona ASC;


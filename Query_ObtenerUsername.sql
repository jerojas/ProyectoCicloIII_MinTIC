SELECT username, correo FROM db.mintic.usuarios
WHERE username REGEXP('[0-9]')
ORDER BY username ASC;

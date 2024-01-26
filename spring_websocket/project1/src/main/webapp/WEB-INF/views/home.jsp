<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
	<script src="http://localhost:8887/socket.io/socket.io.js"></script>
	<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
</head>
<body>
<h1>
	Hello world!  
</h1>

	<script>
$(document).ready(function(){
    var socket = io("http://localhost:8887", { forceNew: true });
    socket.on('boardcast', function(data) {
        console.log('Connected to server:', data.server);
    });
});


	</script>
</body>
</html>

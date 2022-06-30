<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="stylecontact.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bhog- Indian Fine Dining</title>
  </head>
  <body>
    <nav>
      <div class="logo">KICKS</div>
      
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Product</a></li>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="account.html">Account</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.php" class="activepage">Contact Us</a></li>
      </ul>
    </nav>
    <div style="display:flex; justify-content:center; background: url(images/sneaker.webp); height: 92vh;">
    <form action="connect.php" method="post">
      <?php
        $msg = "";
        if(isset($_GET['error'])){
          $msg = "Fill in the details";
          echo '<div class="msg red">'.$msg.'</div>';
        }
        if(isset($_GET['success'])){
          $msg = "Successful";
          echo '<div class="msg green">'.$msg.'</div>';
        }
      ?>
      
      <input type="text" id="firstName" name="firstName" placeholder="First Name" required><br><br>
   
      <input type="text" id="lastName" name="lastName" placeholder="Last Name" required><br><br>
  
      <input type="email" id="email" name="email" placeholder="Email" required><br><br>

      <select name="category" id="category" required>
          <option value="" selected disabled hidden>Choose a category</option>
          <option value="doubt">Doubt</option>
          <option value="complaint">Complaint</option>
          <option value="request">Request</option>
      </select><br><br>

      <textarea id="detail" name="detail" placeholder="Write something..." style="height:200px" required></textarea> <br><br>
      <button type="submit" name="submit" class="submit">Submit</button>
      <input type="reset">
      </form>
      </div>

  </body>
</html>
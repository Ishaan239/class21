function bounceOff(a, b) {
    if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2&&a.y-b.y<a.height/2+b.heght/2&&b.y-a.y<a.height/2+b.heght/2){
      a.velocityX=-a.velocityX
      b.velocityX=-b.velocityX
      a.velocityY=-a.velocityY
      b.velocityY=-b.velocityY
    }
  }
/* 
 MODULE: PLAY BUTTON
 Show a play/pause button
 
 Listens for:
 - player:video:play
 - player:video:playing 
 - player:video:pause 
 - player:video:ended
*/

Player.provide('play-button', 
  {}, 
  function(Player,$,opts){
    var $this = this;
    $.extend($this, opts);
    $this.render();
    
    Player.bind('player:video:playing player:video:seeked player:video:pause player:video:ended', function(e){
        $this.render();
      });
      
    return $this;
  }
          
);

<script>
function calculateScore(rank){
  if(rank <= 10) return 150;
  if(rank <= 20) return 120;
  if(rank <= 40) return 100;
  if(rank <= 75) return 70;
  if(rank <= 100) return 40;
  return 0;
}
</script>

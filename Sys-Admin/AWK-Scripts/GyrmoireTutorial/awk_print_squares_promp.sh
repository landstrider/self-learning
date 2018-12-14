#!/usr/bin/awk -f
BEGIN {
  printf "type a number ";
}
{
  printf "The square of %d is %d \n", $1, $1*$1;
}
END {
  printf "Done";
}

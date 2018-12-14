#!/usr/bin/awk -f
BEGIN {
  i=1;
  while (i <=10) {
	printf "The square of %d is %d \n", i, i*i;
	i++;
  }
exit;
}

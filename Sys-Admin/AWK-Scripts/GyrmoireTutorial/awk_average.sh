#!/usr/bin/awk -f
BEGIN {
#How many lines
  lines=0;
  total=0;
}
{
#this code is executed once for each line
#increase the number of files
  lines++;
#increase the total size which is field #1
  total+=$1;
}
END {
#now, output the total
  printf "%d lines read \n", lines;
  printf "total is %d \n", total;
  if (lines > 0) {
	printf "average is %f \n", total/lines;
  } else {
	  printf "average is 0";
  }
}

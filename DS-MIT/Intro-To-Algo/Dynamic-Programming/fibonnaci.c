#define MAX_BUCKETS 10000
#define MULTIPLIER 31
struct wordrec
{
  char* word;
  unsigned long count;
  struct wordrec* next;
};

/* hash bucket */
struct wordrec* table[MAX_LEN];

unsigned long hashstring(const char* str)
{
  unsigned long hash=0;
  while(*str)
  {
    hash= hash*MULTIPLIER+*str;
    str++;
  }
  return hash%MAX_BUCKETS;
}

struct wordrec* lookup(const char* str, int create)
{
  struct wordrec* curr=NULL;
  unsigned long hash=hashstring(str);
  struct wordrec* wp=table[hash];

  for(curr=wp; curr!=NULL; curr=curr->next)
    /* search */
  
  if(create)
    /* add to front */

  return curr;
}

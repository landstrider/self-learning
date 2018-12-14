my $variables = {
  scalar  =>  {
	description => "single item",
	sigil => '$',
  },
  array   =>  {
	description => "ordered list of items",
	sigil => '@',
  },
  hash    =>  {
	description => "key/value pairs",
	sigil => '%',
  },
};
print "Scalars begin with a $variables->{'scalar'}->{'sigil'}\n";

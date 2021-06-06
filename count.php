<?php
$dt_end = new DateTime('December 3, 2009 2:00 PM');
$remain = $dt_end->diff(new DateTime());
echo $remain->d . ' days and ' . $remain->h . ' hours';
?>

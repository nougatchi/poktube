# PokTube
![Website](screenshot.png)

## How to set up (DEVELOPEMENT PURPOSES)

1. Get XAMPP.
2. Install Apache and MySQL from the XAMPP Control Panel.
3. Get ``poktube.sql`` from here
4. Make a database called ``poktube``
5. Import ``poktube.sql`` to the ``poktube`` database
6. Make a folder called ``preload`` in the content folder if it does not exist.

### The homer
Type these commands on your PokTube database on PHPmyAdmin, why? Because the database was updated. A fresh empty database is available.

No, this will not give access to that The Homer folder.
#### March 31st 2021 database changes
This should make reverse ordering work for members.php. it might not work, i swear.
```sql
ALTER TABLE `users` CHANGE `id` `id` INT(64) NOT NULL;
DROP PRIMARY KEY,
ADD PRIMARY KEY (`id`);
```
#### March 26th 2021 database changes
This adds support for subscriptions
```sql
ALTER TABLE `users` ADD `subscriptions` TEXT NOT NULL AFTER `subscribers`; 
```
#### March 19th 2021 database changes
This adds support for bulletins, as well as expanding customability for profiles.
```sql
CREATE TABLE `bulletins` ( `id` bigint(11) NOT NULL, `date` date NOT NULL, `subject` text NOT NULL, `body` text NOT NULL, `user` text NOT NULL );

ALTER TABLE `videodb` CHANGE `UploadDate` `UploadDate` DATETIME NOT NULL; 

ALTER TABLE `users` ADD `channel_inside` VARCHAR(255) NOT NULL DEFAULT '#EDF5FB' AFTER `channel_bg`;

ALTER TABLE `users` ADD `channel_text` VARCHAR(255) NOT NULL DEFAULT '#0033CC' AFTER `channel_inside`; 
```

#### March 6th 2021 database changes
This adds the length of videos.
```sql
ALTER TABLE `videodb` ADD `VideoLength` BIGINT UNSIGNED NOT NULL AFTER `HQVideoFile`;
```
#### February 22nd 2021 database changes
This adds the "Is admin" and the "Is approved" things, for the Admin Control Panel.
```sql
ALTER TABLE `users` ADD `is_admin` INT(4) NOT NULL DEFAULT '0' AFTER `is_partner`; 

ALTER TABLE `videodb` ADD `isApproved` INT(4) NOT NULL AFTER `UploadDate`; 
```
#### February 9th 2021 database changes
This adds Partner and HD Video Support. NEEDED OR ELSE UPLOADER WILL NOT WORK.
```sql
ALTER TABLE `users` ADD `is_partner` TINYINT NOT NULL AFTER `registeredon`; 

ALTER TABLE `videodb` ADD `HQVideoFile` TEXT NOT NULL AFTER `VideoFile`; 
```
## To do
* Improve the All users page. (only some shitty internal incomplete admin control panel exists)
* Add categories

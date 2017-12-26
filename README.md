# timeago-vue


> timeago-vue is a simple vue component used to format date with `*** time ago` statement. eg: '3 hours ago'. 

**The component based on [timeago.js](https://github.com/hustcc/timeago.js)** which is a simple javascript module.

 - Realtime render. Automatic release the resources.
 - Simple. Only 2kb.
 - Efficient. When the time is `3 hour ago`, the interval will an hour (3600 * 1000 ms).
 - Locales supported.



# 1. install

> **npm install timeago-vue**


# 2. usage

```js
import Vue from 'vue';
import TimeAgo from 'timeago-vue';


Vue.use(TimeAgo,{
    name:"timeago", //compoment name,default is timeago
    locale:'zh-CN' //global setting,default is en
})

<timeago datetime={'2016-08-08 08:08:08'} locale='zh_CN' />
```


# 3. component props

 - **`datetime`** (required, string / Date / timestamp)

The datetime to be formated. can be `datetime string`, `Date instance`, or `timestamp`.

 - **`live`** (optional, boolean)

Live render, default is `true`.


 - **`locale`** (optional, string)

The `locale` language of statement, will overriding the global setting. All supported locales [here](https://github.com/hustcc/timeago.js/tree/master/locales). If you want to use locale which is not `zh_CN` / `en`, you should import the locale before use it. As below:

```js
import Vue from 'vue';
import TimeAgo from 'timeago-vue';
import timeago from 'timeago.js';

// import it first.
timeago.register('vi', require('timeago.js/locales/vi'));


Vue.use(TimeAgo,{
    locale:'vi' //global setting,default is en
})

// then use it.
<timeago datetime={'2016-08-08 08:08:08'}  />
```

# 4. LICENSE

MIT


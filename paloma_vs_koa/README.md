### Node.js

7.4.0

### System

MacBook Pro (Retina, 13-inch, Early 2015)  
2.7 GHz Intel Core i5  
8 GB 1867 MHz DDR3  

### Command

```
ab -c 10 -n 10000 http://localhost:3000/
```

### Result

**Koa**

```
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      10
Time taken for tests:   3.037 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      1490000 bytes
HTML transferred:       130000 bytes
Requests per second:    3292.89 [#/sec] (mean)
Time per request:       3.037 [ms] (mean)
Time per request:       0.304 [ms] (mean, across all concurrent requests)
Transfer rate:          479.14 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.7      0      73
Processing:     0    3   3.2      3      77
Waiting:        0    3   3.1      3      77
Total:          1    3   3.3      3      77

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      3
  80%      3
  90%      3
  95%      4
  98%      5
  99%      7
 100%     77 (longest request)
```

**Paloma**

```
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      10
Time taken for tests:   3.101 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      1490000 bytes
HTML transferred:       130000 bytes
Requests per second:    3225.23 [#/sec] (mean)
Time per request:       3.101 [ms] (mean)
Time per request:       0.310 [ms] (mean, across all concurrent requests)
Transfer rate:          469.30 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       1
Processing:     0    3   4.0      3     152
Waiting:        0    3   4.0      3     152
Total:          1    3   4.0      3     152

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      3
  80%      3
  90%      3
  95%      4
  98%      6
  99%      7
 100%    152 (longest request)
```

Koa/Paloma = 1.020978348830936
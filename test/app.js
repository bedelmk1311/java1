// 1〜10の偶数を昇順で表示する

public class Main {
  public static void main(String[] args) {
    for(int i = 1; 1 <= 10; i++)
      if(i % 2 == 0) {
        System.out.println(i);
      }
  }
}
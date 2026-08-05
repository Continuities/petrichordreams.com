<script lang="ts">
  interface Props {
    question: string;
    answer: string;
  }
  let { question, answer }: Props = $props();
</script>

<div>
  <p>{question}</p>
  <p>{answer}</p>
</div>

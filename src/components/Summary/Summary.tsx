interface Props {
  goToStep: (step: number) => void;
}

const Summary = ({ goToStep }: Props) => {
  return (
    <>
      <header>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <button onClick={() => goToStep(2)}>to 2</button>
      </header>

      <div></div>
    </>
  );
};

export default Summary;

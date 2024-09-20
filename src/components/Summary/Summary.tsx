interface Props {
  goToStep: (step: number) => void;
}

const Summary = ({ goToStep }: Props) => {
  return (
    <>
      <header>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </header>

      <div>
        <p>Total (per month)</p>
      </div>
      <button onClick={() => goToStep(1)}>to 2</button>

      <div></div>
    </>
  );
};

export default Summary;
